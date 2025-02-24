

# Address


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**country** | **String** | The long-name descriptive version of the Country Code |  [optional] |
|**countryCode** | **String** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) |  [optional] |
|**field** | [**FieldEnum**](#FieldEnum) |  |  [optional] |
|**line1** | **String** |  |  [optional] |
|**line2** | **String** |  |  [optional] |
|**locality** | **String** | The municipality to which the address belongs |  [optional] |
|**postalCode** | **String** |  |  [optional] |
|**region** | **String** | The long-name descriptive version of the Region Code |  [optional] |
|**regionCode** | **String** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) |  [optional] |
|**zipCode** | **String** |  |  [optional] |
|**zipFour** | **String** |  |  [optional] |



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

