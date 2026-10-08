# KeapCoreServiceV2Sdk.TaskAppointmentsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAppointments**](TaskAppointmentsApi.md#listAppointments) | **GET** /rest/v2/taskAppointments | List Task Appointments



## listAppointments

> ListTaskAppointmentsResponse listAppointments(opts)

List Task Appointments

Retrieves a paginated list of Task Appointments

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.TaskAppointmentsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply. Allowed fields:  - `contact_id`, `user_id` - `start_time`, `end_time`, `create_time`, `update_time` - ISO 8601 date/time - Custom field names - reference a custom field by its name (e.g. `priority`, `location_type`).   Standard field names take precedence over a custom field sharing the same name.  Allowable operators: - `contact_id`, `user_id`: `==` - time fields, and numeric/date custom fields: `==`, `<`, `<=`, `>`, `>=` - text/choice/multi-select custom fields: `==` (prefix wildcard supported, e.g. `value*`)  URL-encode operators (`==` → `%3D%3D`, `>` → `%3E`, `<` → `%3C`) and combine filters with `;` (AND).  Examples: - `filter=contact_id%3D%3D123` - `filter=start_time%3E%3D2024-01-01T00:00:00Z%3Bend_time%3C2024-02-01T00:00:00Z` - `filter=priority%3D%3DHigh` (custom field) 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`  Example: `order_by=start_time asc`  If omitted, appointments are returned in a stable default order (ascending by internal sequence) so that pagination remains consistent across pages. 
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listAppointments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply. Allowed fields:  - &#x60;contact_id&#x60;, &#x60;user_id&#x60; - &#x60;start_time&#x60;, &#x60;end_time&#x60;, &#x60;create_time&#x60;, &#x60;update_time&#x60; - ISO 8601 date/time - Custom field names - reference a custom field by its name (e.g. &#x60;priority&#x60;, &#x60;location_type&#x60;).   Standard field names take precedence over a custom field sharing the same name.  Allowable operators: - &#x60;contact_id&#x60;, &#x60;user_id&#x60;: &#x60;&#x3D;&#x3D;&#x60; - time fields, and numeric/date custom fields: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60; - text/choice/multi-select custom fields: &#x60;&#x3D;&#x3D;&#x60; (prefix wildcard supported, e.g. &#x60;value*&#x60;)  URL-encode operators (&#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;) and combine filters with &#x60;;&#x60; (AND).  Examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;start_time%3E%3D2024-01-01T00:00:00Z%3Bend_time%3C2024-02-01T00:00:00Z&#x60; - &#x60;filter&#x3D;priority%3D%3DHigh&#x60; (custom field)  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;  Example: &#x60;order_by&#x3D;start_time asc&#x60;  If omitted, appointments are returned in a stable default order (ascending by internal sequence) so that pagination remains consistent across pages.  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListTaskAppointmentsResponse**](ListTaskAppointmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

