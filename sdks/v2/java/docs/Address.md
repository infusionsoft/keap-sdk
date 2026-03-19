

# Address


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**country** | **String** | Deprecated. The long-name descriptive version of the Country Code. Please use &#39;country_code&#39; for POST/PATCH operations. |  [optional] |
|**line1** | **String** | Street address line 1 |  [optional] |
|**line2** | **String** | Street address line 2 |  [optional] |
|**locality** | **String** | The municipality to which the address belongs |  [optional] |
|**region** | **String** | The long-name descriptive version of the Region Code. Please use &#39;region_code&#39; for POST/PATCH operations. |  [optional] |
|**field** | [**FieldEnum**](#FieldEnum) | Address type field |  [optional] |
|**countryCode** | **String** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) |  [optional] |
|**postalCode** | **String** | Postal or ZIP code |  [optional] |
|**regionCode** | **String** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) |  [optional] |
|**zipCode** | **String** | ZIP code (US) |  [optional] |
|**zipFour** | **String** | ZIP+4 extension |  [optional] |



## Enum: FieldEnum

| Name | Value |
|---- | -----|
| ADDRESS_FIELD_UNSPECIFIED | &quot;ADDRESS_FIELD_UNSPECIFIED&quot; |
| BILLING | &quot;BILLING&quot; |
| SHIPPING | &quot;SHIPPING&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

