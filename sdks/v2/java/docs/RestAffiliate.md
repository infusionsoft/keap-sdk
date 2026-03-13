

# RestAffiliate


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The AffiliateId |  [optional] |
|**code** | **String** | The Affiliate Code |  [optional] |
|**name** | **String** | The Affiliate Name |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The Affiliate Status |  [optional] |
|**contactId** | **String** | The ContactID |  [optional] |
|**uniqueSiteId** | **String** | The Affiliate PortalSite Id |  [optional] |
|**dateCreated** | **String** | Date affiliate was created (ISO-8601) |  [optional] |
|**parentAffiliateId** | **String** | The Parent Affiliate Id |  [optional] |
|**notifyOnSale** | **Boolean** | Whether to notify on sale events |  [optional] |
|**notifyOnLead** | **Boolean** | Whether to notify on lead events |  [optional] |
|**trackLeadsDays** | **Integer** | Number of days to track leads |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

