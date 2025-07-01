import {getApplication, getFullResourceName} from 'br:nandanmathure-gmguavccehhqfvhv.azurecr.io/authsvr/authorization-server:2025-06-27'

@description('Tenant that will be suffixed to each resource in Azure')
@minLength(1)
@maxLength(5)
param tenant string

@description('Azure Location Name')
param location string

var application = getApplication(tenant, location, 'SharedResources', 'AzureShardResources')

resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: getFullResourceName(application.applicationName, application.tenant, 'Portal', 'Microsoft.Web/serverfarms', application.location.name)
  location: application.location.name
  tags: application.tags
  sku: {
    name: 'F1'
    tier: 'Free'
  }
  kind: 'app'
}
