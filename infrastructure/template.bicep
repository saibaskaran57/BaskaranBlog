param name string
param location string
param sku string
param skucode string
param repositoryUrl string
param branch string
param repositoryToken string {
  secure: true
}
param appLocation string
param apiLocation string
param appArtifactLocation string

resource static_site 'Microsoft.Web/staticSites@2020-06-01' = {
  name: name
  location: location
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    repositoryToken: repositoryToken
    buildProperties: {
      appLocation: appLocation
      apiLocation: apiLocation
      appArtifactLocation: appArtifactLocation
    }
  }
  sku: {
    tier: sku
    name: skucode
  }
}