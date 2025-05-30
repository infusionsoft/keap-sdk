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
    /// DeleteSubscriptionPlanCommissionRequest
    /// </summary>
    [DataContract(Name = "DeleteSubscriptionPlanCommissionRequest")]
    public partial class DeleteSubscriptionPlanCommissionRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DeleteSubscriptionPlanCommissionRequest" /> class.
        /// </summary>
        /// <param name="productId">productId.</param>
        /// <param name="subscriptionPlanId">subscriptionPlanId.</param>
        public DeleteSubscriptionPlanCommissionRequest(string productId = default, string subscriptionPlanId = default)
        {
            this.ProductId = productId;
            this.SubscriptionPlanId = subscriptionPlanId;
        }

        /// <summary>
        /// Gets or Sets ProductId
        /// </summary>
        [DataMember(Name = "product_id", EmitDefaultValue = false)]
        public string ProductId { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionPlanId
        /// </summary>
        [DataMember(Name = "subscription_plan_id", EmitDefaultValue = false)]
        public string SubscriptionPlanId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DeleteSubscriptionPlanCommissionRequest {\n");
            sb.Append("  ProductId: ").Append(ProductId).Append("\n");
            sb.Append("  SubscriptionPlanId: ").Append(SubscriptionPlanId).Append("\n");
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
