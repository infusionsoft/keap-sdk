# KeapCoreServiceV2Sdk.AddProductInterestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The product interest type. | 
**entityId** | **String** | The &#x60;product_id&#x60; (when the &#x60;type&#x60; is set to &#x60;PRODUCT&#x60;)  or the &#x60;subscription_plan_id&#x60; (when the &#x60;type&#x60; is set to &#x60;SUBSCRIPTION_PLAN&#x60;).  | 
**price** | **Number** | The price per unit of the product. | 
**quantity** | **Number** | Defaults to &#x60;1&#x60;. | [optional] 
**discountPercent** | **Number** | Defaults to &#x60;0&#x60;. | [optional] 



## Enum: TypeEnum


* `PRODUCT` (value: `"PRODUCT"`)

* `SUBSCRIPTION_PLAN` (value: `"SUBSCRIPTION_PLAN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




