

# User

A user in the system

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**address** | [**Address**](Address.md) | The user&#39;s address |  [optional] |
|**title** | **String** | The user&#39;s job title |  [optional] |
|**website** | **String** | The user&#39;s website URL |  [optional] |
|**partner** | **Boolean** | Whether the user is a partner |  [optional] |
|**admin** | **Boolean** | Whether the user is an admin |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The user&#39;s status |  [optional] |
|**id** | **String** | The unique identifier of the user |  [optional] |
|**globalUserId** | **String** | The global user identifier across tenants |  [optional] |
|**keapId** | **String** | The Keap ID of the user |  [optional] |
|**givenName** | **String** | The user&#39;s first name |  [optional] |
|**familyName** | **String** | The user&#39;s last name |  [optional] |
|**phoneNumbers** | [**List&lt;PhoneNumber&gt;**](PhoneNumber.md) | List of user&#39;s phone numbers |  [optional] |
|**faxNumbers** | [**List&lt;FaxNumber&gt;**](FaxNumber.md) | List of user&#39;s fax numbers |  [optional] |
|**emailAddresses** | [**List&lt;EmailAddress&gt;**](EmailAddress.md) | List of user&#39;s email addresses |  [optional] |
|**socialAccounts** | [**List&lt;SocialAccount&gt;**](SocialAccount.md) | List of user&#39;s social media accounts |  [optional] |
|**companyName** | **String** | The user&#39;s company name |  [optional] |
|**createdBy** | **Long** | ID of the user who created this user |  [optional] |
|**createTime** | **ZonedDateTime** | When the user was created, in ISO-8601 format |  [optional] |
|**updatedBy** | **Long** | ID of the user who last updated this user |  [optional] |
|**updateTime** | **ZonedDateTime** | When the user was last updated, in ISO-8601 format |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INVITED | &quot;INVITED&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| NOT_A_USER | &quot;NOT_A_USER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

