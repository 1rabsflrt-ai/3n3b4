$Host.UI.RawUI.WindowTitle = "Project Runner"

Write-Host "Checking for Bun installation..." -ForegroundColor Cyan
$bun_installed = Get-Command bun -ErrorAction SilentlyContinue

if ($bun_installed) {
    Write-Host "Bun is already installed. Skipping installation." -ForegroundColor Green
} else {
    Write-Host "Bun not found. Starting automatic installation..." -ForegroundColor Yellow
    
    irm bun.sh/install.ps1 | iex
    
    $bunPath = "$env:USERPROFILE\.bun\bin"
    $env:PATH = "$bunPath;$env:PATH"
    
    Write-Host "Installation finished. Verifying..." -ForegroundColor Green
    
    bun --version
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Bun installation failed. Please restart the terminal and try again." -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit
    }
}

$projectPath = "$env:USERPROFILE\Desktop\NAEB_KEY"
Write-Host "Changing directory to project folder..." -ForegroundColor Cyan

if (-not (Test-Path $projectPath)) {
    Write-Host "ERROR: Project folder not found at: $projectPath" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit
}
Set-Location $projectPath

Write-Host "Installing dependencies (bun install)..." -ForegroundColor Cyan
bun install

Write-Host "Starting development server (bun dev) in a new window..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $projectPath; bun dev"

Write-Host "Waiting 5 seconds for the server to start..."
Start-Sleep -Seconds 5 

Write-Host "Opening localhost:3000 in browser."
Start-Process "http://localhost:3000"

Write-Host "Done! The development server is running in a separate window." -ForegroundColor Green
Read-Host "Press Enter to close this window."
