

# UpdateAffiliateRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**code** | **String** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length |  |
|**name** | **String** | The Affiliate name will be derived from the Contact, when not explicitly provided |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The Affiliate Status |  [optional] |
|**contactId** | **String** | The contactId identifier , Must be a positive number |  |
|**parentAffiliateId** | **String** | The Parent Affiliate Id |  [optional] |
|**notifyOnSale** | **Boolean** | Whether to notify on sale events |  [optional] |
|**notifyOnLead** | **Boolean** | Whether to notify on lead events |  [optional] |
|**trackLeadsDays** | **Integer** | Number of days to track leads |  [optional] |
|**password** | **String** | Affiliate portal password. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

