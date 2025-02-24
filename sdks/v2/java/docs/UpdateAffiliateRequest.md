

# UpdateAffiliateRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**code** | **String** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length |  |
|**contactId** | **String** | The contactId identifier , Must be a positive number |  [optional] |
|**name** | **String** | The Affiliate name will be derived from the Contact, when not explicitly provided |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The Affiliate Status |  |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

