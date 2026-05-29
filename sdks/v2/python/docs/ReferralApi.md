# keap_core_v2_client.ReferralApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_referral**](ReferralApi.md#create_referral) | **POST** /rest/v2/referrals | Create a Referral
[**list_referrals**](ReferralApi.md#list_referrals) | **GET** /rest/v2/referrals | List Referrals


# **create_referral**
> Referral create_referral(create_referral_request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_referral_request import CreateReferralRequest
from keap_core_v2_client.models.referral import Referral
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.ReferralApi(api_client)
    create_referral_request = keap_core_v2_client.CreateReferralRequest() # CreateReferralRequest | 

    try:
        # Create a Referral
        api_response = api_instance.create_referral(create_referral_request)
        print("The response of ReferralApi->create_referral:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferralApi->create_referral: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_referral_request** | [**CreateReferralRequest**](CreateReferralRequest.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_referrals**
> ListReferralsResponse list_referrals(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

List Referrals

Retrieves a list of all referrals with optional filtering and sorting

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_referrals_response import ListReferralsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.ReferralApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `referral_partner_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `contact_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `source` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `type` (Allowed values: `COOKIE`, `PERMANENT`, `MANUAL`)  You will need to apply the `==` operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=referral_partner_id%3D%3D123` - `filter=referral_partner_id%3E10` (referral_partner_id > 10) - `filter=contact_id%3D%3D456` - `filter=contact_id%3C%3D100` (contact_id <= 100) - `filter=source%3D%3DEmail Marketing` - `filter=source%3D%3DEmail*` (starts with \"Email\") - `filter=description%3D%3DReferred*` (starts with \"Referred\") - `filter=type%3D%3DCOOKIE` - `filter=referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `referral_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)

    try:
        # List Referrals
        api_response = api_instance.list_referrals(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of ReferralApi->list_referrals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferralApi->list_referrals: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;referral_partner_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;contact_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;source&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;type&#x60; (Allowed values: &#x60;COOKIE&#x60;, &#x60;PERMANENT&#x60;, &#x60;MANUAL&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;referral_partner_id%3D%3D123&#x60; - &#x60;filter&#x3D;referral_partner_id%3E10&#x60; (referral_partner_id &gt; 10) - &#x60;filter&#x3D;contact_id%3D%3D456&#x60; - &#x60;filter&#x3D;contact_id%3C%3D100&#x60; (contact_id &lt;&#x3D; 100) - &#x60;filter&#x3D;source%3D%3DEmail Marketing&#x60; - &#x60;filter&#x3D;source%3D%3DEmail*&#x60; (starts with \&quot;Email\&quot;) - &#x60;filter&#x3D;description%3D%3DReferred*&#x60; (starts with \&quot;Referred\&quot;) - &#x60;filter&#x3D;type%3D%3DCOOKIE&#x60; - &#x60;filter&#x3D;referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;referral_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 

### Return type

[**ListReferralsResponse**](ListReferralsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

