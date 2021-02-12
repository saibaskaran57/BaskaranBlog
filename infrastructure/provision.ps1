param ($subscription = "", $resourceGroupName = "")
Connect-AzureAD

# Azure resource deployment
$suffix = Get-Random -Maximum 1000
$deploymentName = "AzureStaticWebApp" + $suffix
$templateFile = "./template.json"
$parameterFile = "./parameters.json"
$mode = "Incremental"

Set-AzContext -Subscription $subscription
New-AzResourceGroupDeployment `
  -Name $deploymentName `
  -ResourceGroupName $resourceGroupName `
  -TemplateFile $templateFile `
  -TemplateParameterFile $parameterFile `
  -Mode $mode `
  -verbose