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
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// CreateFunnelIntegrationRequest
    /// </summary>
    [DataContract(Name = "CreateFunnelIntegrationRequest")]
    public partial class CreateFunnelIntegrationRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFunnelIntegrationRequest" /> class.
        /// </summary>
        /// <param name="baseUrl">The base URL of the integration, that will be used to call the integration related REST endpoints..</param>
        /// <param name="context">The context of the integration, that will be used internally to identify the integration..</param>
        /// <param name="enabled">The flag to enable or disable the integration..</param>
        /// <param name="funnelIntegrationActions">The list of actions that will be installed with the integration..</param>
        /// <param name="funnelIntegrationTriggers">The list of triggers that will be installed with the integration..</param>
        /// <param name="name">The name of the integration, that will be used internally to identify the integration..</param>
        public CreateFunnelIntegrationRequest(string baseUrl = default, string context = default, bool enabled = default, List<FunnelIntegrationAction> funnelIntegrationActions = default, List<FunnelIntegrationAction> funnelIntegrationTriggers = default, string name = default)
        {
            this.BaseUrl = baseUrl;
            this.Context = context;
            this.Enabled = enabled;
            this.FunnelIntegrationActions = funnelIntegrationActions;
            this.FunnelIntegrationTriggers = funnelIntegrationTriggers;
            this.Name = name;
        }

        /// <summary>
        /// The base URL of the integration, that will be used to call the integration related REST endpoints.
        /// </summary>
        /// <value>The base URL of the integration, that will be used to call the integration related REST endpoints.</value>
        [DataMember(Name = "base_url", EmitDefaultValue = false)]
        public string BaseUrl { get; set; }

        /// <summary>
        /// The context of the integration, that will be used internally to identify the integration.
        /// </summary>
        /// <value>The context of the integration, that will be used internally to identify the integration.</value>
        [DataMember(Name = "context", EmitDefaultValue = false)]
        public string Context { get; set; }

        /// <summary>
        /// The flag to enable or disable the integration.
        /// </summary>
        /// <value>The flag to enable or disable the integration.</value>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// The list of actions that will be installed with the integration.
        /// </summary>
        /// <value>The list of actions that will be installed with the integration.</value>
        [DataMember(Name = "funnel_integration_actions", EmitDefaultValue = false)]
        public List<FunnelIntegrationAction> FunnelIntegrationActions { get; set; }

        /// <summary>
        /// The list of triggers that will be installed with the integration.
        /// </summary>
        /// <value>The list of triggers that will be installed with the integration.</value>
        [DataMember(Name = "funnel_integration_triggers", EmitDefaultValue = false)]
        public List<FunnelIntegrationAction> FunnelIntegrationTriggers { get; set; }

        /// <summary>
        /// The name of the integration, that will be used internally to identify the integration.
        /// </summary>
        /// <value>The name of the integration, that will be used internally to identify the integration.</value>
        /*
        <example>My Integration, MyIntegration, My 1 New Very Exciting Integration</example>
        */
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateFunnelIntegrationRequest {\n");
            sb.Append("  BaseUrl: ").Append(BaseUrl).Append("\n");
            sb.Append("  Context: ").Append(Context).Append("\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  FunnelIntegrationActions: ").Append(FunnelIntegrationActions).Append("\n");
            sb.Append("  FunnelIntegrationTriggers: ").Append(FunnelIntegrationTriggers).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
