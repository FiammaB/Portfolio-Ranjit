$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$publicRoot = Join-Path $workspaceRoot 'public'
$sourceRoot = Join-Path $workspaceRoot 'source-assets'
$stillsSource = Join-Path $publicRoot 'working-stills'
$stillsArchive = Join-Path $sourceRoot 'working-stills-original'
$stillsTemp = Join-Path $publicRoot 'working-stills-optimized'
$faviconSource = Join-Path $publicRoot 'assets\logo.jpeg'
$faviconDestination = Join-Path $publicRoot 'assets\logo-192.jpg'
$portfolioPosterArchiveRoot = Join-Path $sourceRoot 'portfolio-posters-original'
$portfolioPosterTargets = @(
    (Join-Path $workspaceRoot 'src\data\Case Studies-20260604T182810Z-3-001\Case Studies\Films\Overseas\Dunki-2\Poster.png'),
    (Join-Path $workspaceRoot 'src\data\Case Studies-20260604T182810Z-3-001\Case Studies\Films\Overseas\Ganapath-3\poster.webp'),
    (Join-Path $workspaceRoot 'src\data\Case Studies-20260604T182810Z-3-001\Case Studies\Films\India\Gangster Ganga-2\poster.jpeg'),
    (Join-Path $workspaceRoot 'src\data\Case Studies-20260604T182810Z-3-001\Case Studies\Films\India\Ittaa Kittaa-1\poster.jpeg'),
    (Join-Path $workspaceRoot 'src\data\Case Studies-20260604T182810Z-3-001\Case Studies\Streaming Series\The Roshans-1\poster.jpeg'),
    (Join-Path $workspaceRoot 'src\data\Film Details-20260604T182815Z-3-001\Film Details\Feature Films\Dunki - 4\Poster.png'),
    (Join-Path $workspaceRoot 'src\data\Film Details-20260604T182815Z-3-001\Film Details\Feature Films\Ganapath-5\poster.webp'),
    (Join-Path $workspaceRoot 'src\data\Film Details-20260604T182815Z-3-001\Film Details\Feature Films\Gangster Ganga - 2\poster.jpeg'),
    (Join-Path $workspaceRoot 'src\data\Film Details-20260604T182815Z-3-001\Film Details\Feature Films\Ittaa Kittaa - 3\poster.jpeg'),
    (Join-Path $workspaceRoot 'src\data\Film Details-20260604T182815Z-3-001\Film Details\Streaming Series\The Roshans-1\poster.jpeg')
)

function New-Directory {
    param([string]$Path)

    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Path $Path | Out-Null
    }
}

function Get-JpegCodec {
    [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object MimeType -eq 'image/jpeg' |
        Select-Object -First 1
}

function Get-PngCodec {
    [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object MimeType -eq 'image/png' |
        Select-Object -First 1
}

function Get-ScaledSize {
    param(
        [int]$Width,
        [int]$Height,
        [int]$MaxDimension
    )

    if ($Width -le $MaxDimension -and $Height -le $MaxDimension) {
        return [pscustomobject]@{
            Width = $Width
            Height = $Height
        }
    }

    if ($Width -ge $Height) {
        $scaledWidth = $MaxDimension
        $scaledHeight = [int][math]::Round($Height * ($MaxDimension / [double]$Width))
    }
    else {
        $scaledHeight = $MaxDimension
        $scaledWidth = [int][math]::Round($Width * ($MaxDimension / [double]$Height))
    }

    return [pscustomobject]@{
        Width = [math]::Max($scaledWidth, 1)
        Height = [math]::Max($scaledHeight, 1)
    }
}

function Save-OptimizedJpeg {
    param(
        [string]$SourcePath,
        [string]$DestinationPath,
        [int]$MaxDimension,
        [long]$Quality
    )

    $image = [System.Drawing.Image]::FromFile($SourcePath)

    try {
        $size = Get-ScaledSize -Width $image.Width -Height $image.Height -MaxDimension $MaxDimension
        $bitmap = New-Object System.Drawing.Bitmap $size.Width, $size.Height

        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.Clear([System.Drawing.Color]::White)
                $graphics.DrawImage($image, 0, 0, $size.Width, $size.Height)

                $encoder = Get-JpegCodec
                $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
                $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $Quality)
                $bitmap.Save($DestinationPath, $encoder, $encoderParams)
            }
            finally {
                $graphics.Dispose()
            }
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $image.Dispose()
    }
}

function Save-OptimizedPng {
    param(
        [string]$SourcePath,
        [string]$DestinationPath,
        [int]$MaxDimension
    )

    $image = [System.Drawing.Image]::FromFile($SourcePath)

    try {
        $size = Get-ScaledSize -Width $image.Width -Height $image.Height -MaxDimension $MaxDimension
        $bitmap = New-Object System.Drawing.Bitmap $size.Width, $size.Height

        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.Clear([System.Drawing.Color]::Transparent)
                $graphics.DrawImage($image, 0, 0, $size.Width, $size.Height)

                $bitmap.Save($DestinationPath, (Get-PngCodec), $null)
            }
            finally {
                $graphics.Dispose()
            }
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $image.Dispose()
    }
}

function Copy-ToArchive {
    param(
        [string]$SourcePath,
        [string]$ArchiveRoot,
        [string]$RootPath
    )

    $normalizedRoot = [System.IO.Path]::GetFullPath($RootPath).TrimEnd('\')
    $normalizedSource = [System.IO.Path]::GetFullPath($SourcePath)

    if ($normalizedSource.StartsWith("$normalizedRoot\", [System.StringComparison]::OrdinalIgnoreCase)) {
        $relativePath = $normalizedSource.Substring($normalizedRoot.Length + 1)
    }
    else {
        $relativePath = Split-Path -Leaf $normalizedSource
    }

    $archivePath = Join-Path $ArchiveRoot $relativePath
    $archiveDirectory = Split-Path -Parent $archivePath

    New-Directory -Path $archiveDirectory

    if (-not (Test-Path -LiteralPath $archivePath)) {
        Copy-Item -LiteralPath $SourcePath -Destination $archivePath
    }
}

function Optimize-PortfolioPosterAssets {
    param(
        [string[]]$TargetPaths,
        [string]$ArchiveRoot,
        [string]$RootPath
    )

    $summary = [ordered]@{
        OptimizedCount = 0
        SkippedCount = 0
        BeforeMB = 0
        AfterMB = 0
        SavedMB = 0
        ArchiveRoot = $ArchiveRoot
    }

    $processableExtensions = @('.jpg', '.jpeg', '.png')
    $beforeBytes = 0L
    $afterBytes = 0L

    foreach ($targetPath in $TargetPaths) {
        if (-not (Test-Path -LiteralPath $targetPath)) {
            continue
        }

        $file = Get-Item -LiteralPath $targetPath
        $extension = $file.Extension.ToLowerInvariant()

        if ($processableExtensions -notcontains $extension) {
            $summary.SkippedCount++
            continue
        }

        $beforeBytes += $file.Length
        Copy-ToArchive -SourcePath $file.FullName -ArchiveRoot $ArchiveRoot -RootPath $RootPath

        $tempPath = Join-Path $file.DirectoryName "$($file.BaseName).optimized$extension"

        try {
            if ($extension -eq '.png') {
                Save-OptimizedPng -SourcePath $file.FullName -DestinationPath $tempPath -MaxDimension 1600
            }
            else {
                Save-OptimizedJpeg -SourcePath $file.FullName -DestinationPath $tempPath -MaxDimension 1600 -Quality 76
            }

            $optimizedFile = Get-Item -LiteralPath $tempPath

            if ($optimizedFile.Length -lt $file.Length) {
                Move-Item -LiteralPath $tempPath -Destination $file.FullName -Force
                $summary.OptimizedCount++
                $afterBytes += (Get-Item -LiteralPath $file.FullName).Length
            }
            else {
                Remove-Item -LiteralPath $tempPath -Force
                $summary.SkippedCount++
                $afterBytes += $file.Length
            }
        }
        finally {
            if (Test-Path -LiteralPath $tempPath) {
                Remove-Item -LiteralPath $tempPath -Force
            }
        }
    }

    $summary.BeforeMB = [math]::Round($beforeBytes / 1MB, 2)
    $summary.AfterMB = [math]::Round($afterBytes / 1MB, 2)
    $summary.SavedMB = [math]::Round(($beforeBytes - $afterBytes) / 1MB, 2)

    return [pscustomobject]$summary
}

New-Directory -Path $sourceRoot
New-Directory -Path (Join-Path $publicRoot 'assets')

if (-not (Test-Path -LiteralPath $stillsSource)) {
    throw "Source stills folder not found: $stillsSource"
}

if (Test-Path -LiteralPath $stillsTemp) {
    Remove-Item -LiteralPath $stillsTemp -Recurse -Force
}

New-Directory -Path $stillsTemp

$stills = Get-ChildItem -LiteralPath $stillsSource -File
$beforeBytes = ($stills | Measure-Object Length -Sum).Sum

foreach ($file in $stills) {
    $destinationPath = Join-Path $stillsTemp $file.Name
    Save-OptimizedJpeg -SourcePath $file.FullName -DestinationPath $destinationPath -MaxDimension 1600 -Quality 74
}

if (Test-Path -LiteralPath $stillsArchive) {
    $timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $stillsArchive = Join-Path $sourceRoot "working-stills-original-$timestamp"
}

Move-Item -LiteralPath $stillsSource -Destination $stillsArchive
Move-Item -LiteralPath $stillsTemp -Destination $stillsSource

$afterBytes = (Get-ChildItem -LiteralPath $stillsSource -File | Measure-Object Length -Sum).Sum

if (Test-Path -LiteralPath $faviconSource) {
    Save-OptimizedJpeg -SourcePath $faviconSource -DestinationPath $faviconDestination -MaxDimension 192 -Quality 82
}

New-Directory -Path $portfolioPosterArchiveRoot
$portfolioPosterSummary = Optimize-PortfolioPosterAssets -TargetPaths $portfolioPosterTargets -ArchiveRoot $portfolioPosterArchiveRoot -RootPath $workspaceRoot

[pscustomobject]@{
    StillsCount = $stills.Count
    BeforeMB = [math]::Round($beforeBytes / 1MB, 2)
    AfterMB = [math]::Round($afterBytes / 1MB, 2)
    SavedMB = [math]::Round(($beforeBytes - $afterBytes) / 1MB, 2)
    StillsArchive = $stillsArchive
    OptimizedStills = $stillsSource
    Favicon = $faviconDestination
    PortfolioPosters = $portfolioPosterSummary
}
