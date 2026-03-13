

# ListAffiliateCommissionsResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**affiliateCommissions** | [**List&lt;AffiliateCommission&gt;**](AffiliateCommission.md) | List of commissions for this affiliate |  [optional] |
|**nextPageToken** | **String** |  |  [optional] |
|**clawbacks** | **Double** | Calculated total amount of clawbacks from the returned commissions.  |  [optional] |
|**commissionTotal** | **Double** | Calculated total commission amount (amount earned - amount clawbacks) from the returned commissions |  [optional] |
|**amountEarned** | **Double** | Calculated total amount earned from the returned commissions. |  [optional] |


## Implemented Interfaces

* Serializable

