/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.790985
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
    /// ListFreeTrialDiscountsResponse
    /// </summary>
    [DataContract(Name = "ListFreeTrialDiscountsResponse")]
    public partial class ListFreeTrialDiscountsResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListFreeTrialDiscountsResponse" /> class.
        /// </summary>
        /// <param name="freeTrialDiscounts">freeTrialDiscounts.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListFreeTrialDiscountsResponse(List<FreeTrialDiscount> freeTrialDiscounts = default(List<FreeTrialDiscount>), string nextPageToken = default(string))
        {
            this.FreeTrialDiscounts = freeTrialDiscounts;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets FreeTrialDiscounts
        /// </summary>
        [DataMember(Name = "free_trial_discounts", EmitDefaultValue = false)]
        public List<FreeTrialDiscount> FreeTrialDiscounts { get; set; }

        /// <summary>
        /// Gets or Sets NextPageToken
        /// </summary>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListFreeTrialDiscountsResponse {\n");
            sb.Append("  FreeTrialDiscounts: ").Append(FreeTrialDiscounts).Append("\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
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
