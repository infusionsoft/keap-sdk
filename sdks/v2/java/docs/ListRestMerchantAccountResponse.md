

# ListRestMerchantAccountResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountName** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**isTest** | **Boolean** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PAYPAL | &quot;PAYPAL&quot; |
| UNSUPPORTED | &quot;UNSUPPORTED&quot; |
| AUTHORIZE | &quot;AUTHORIZE&quot; |
| EWAY | &quot;EWAY&quot; |
| WEPAY | &quot;WEPAY&quot; |
| STRIPE | &quot;STRIPE&quot; |
| KEAP_PAY | &quot;KEAP_PAY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

