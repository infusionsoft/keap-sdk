

# RestV2Opportunity


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Opportunity ID |  [optional] |
|**contact** | [**OpportunityContact**](OpportunityContact.md) |  |  |
|**stage** | [**OpportunityStage**](OpportunityStage.md) |  |  |
|**user** | [**RestV2User**](RestV2User.md) |  |  [optional] |
|**opportunityTitle** | **String** | Opportunity title |  |
|**nextActionTime** | **String** | Next action timestamp (ISO-8601) |  [optional] |
|**nextActionNotes** | **String** | Notes for next action |  [optional] |
|**opportunityNotes** | **String** | General notes |  [optional] |
|**estimatedCloseTime** | **String** | Estimated close timestamp (ISO-8601) |  [optional] |
|**includeInForecast** | **Boolean** | Include in sales forecast |  [optional] |
|**projectedRevenueLow** | **Double** | Low revenue estimate |  [optional] |
|**projectedRevenueHigh** | **Double** | High revenue estimate |  [optional] |
|**customFields** | [**List&lt;CustomField&gt;**](CustomField.md) |  |  [optional] |
|**createdTime** | **String** | Creation timestamp (ISO-8601) |  [optional] |
|**lastUpdatedTime** | **String** | Last update timestamp (ISO-8601) |  [optional] |
|**affiliateId** | **String** | Affiliate ID |  [optional] |


## Implemented Interfaces

* Serializable

