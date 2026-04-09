

# UpdateAffiliateRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**code** | **String** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 2 characters length |  [optional] |
|**name** | **String** | The Affiliate name. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The Affiliate Status |  [optional] |
|**contactId** | **String** | The contactId identifier. Must be a positive number |  [optional] |
|**parentAffiliateId** | **String** | The Parent Affiliate Id |  [optional] |
|**notifyOnSale** | **Boolean** | Whether to notify on sale events |  [optional] |
|**notifyOnLead** | **Boolean** | Whether to notify on lead events |  [optional] |
|**trackLeadsDays** | **Integer** | Number of days to track leads |  [optional] |
|**password** | **String** | Affiliate portal password. |  [optional] |
|**customFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values to apply to this affiliate |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

