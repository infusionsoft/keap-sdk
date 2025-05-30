/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using Newtonsoft.Json;

namespace Keap.Core.V2.Client.Auth
{
    class TokenResponse
    {
        [JsonProperty("token_type")]
        public string TokenType { get; set; }
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
        [JsonProperty("expires_in")]
        public int? ExpiresIn { get; set; }
        [JsonProperty("created")]
        public DateTime? Created { get; set; }

        [JsonProperty("refresh_token")]
        public string? RefreshToken { get; set; }

        public DateTime? ExpiresAt => ExpiresIn == null ? null : Created?.AddSeconds(ExpiresIn.Value);
    }
}