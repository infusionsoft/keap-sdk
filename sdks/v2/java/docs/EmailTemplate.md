

# EmailTemplate


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**bccAddress** | **String** | The bcc address of the email |  [optional] |
|**categories** | **List&lt;String&gt;** | The categories associated with the email |  [optional] |
|**ccAddress** | **String** | The cc address of the email |  [optional] |
|**contentType** | [**ContentTypeEnum**](#ContentTypeEnum) | The content type of the email |  [optional] |
|**fromAddress** | **String** | The from address of the email |  [optional] |
|**htmlBody** | **String** | The HTML body of the email |  [optional] |
|**mergeContext** | **String** | The merge context of the email |  [optional] |
|**pieceTitle** | **String** | The title of the piece |  [optional] |
|**subject** | **String** | The subject of the email |  [optional] |
|**textBody** | **String** | The text body of the email |  [optional] |
|**toAddress** | **String** | The to address of the email |  [optional] |



## Enum: ContentTypeEnum

| Name | Value |
|---- | -----|
| TEXT | &quot;TEXT&quot; |
| HTML | &quot;HTML&quot; |
| MULTIPART | &quot;MULTIPART&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

