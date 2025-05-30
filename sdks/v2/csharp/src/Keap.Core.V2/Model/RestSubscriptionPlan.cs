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
    /// RestSubscriptionPlan
    /// </summary>
    [DataContract(Name = "RestSubscriptionPlan")]
    public partial class RestSubscriptionPlan : IValidatableObject
    {
        /// <summary>
        /// The interval at which the customer is charged for the subscription.
        /// </summary>
        /// <value>The interval at which the customer is charged for the subscription.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum CycleEnum
        {
            /// <summary>
            /// Enum DAILY for value: DAILY
            /// </summary>
            [EnumMember(Value = "DAILY")]
            DAILY = 1,

            /// <summary>
            /// Enum WEEKLY for value: WEEKLY
            /// </summary>
            [EnumMember(Value = "WEEKLY")]
            WEEKLY = 2,

            /// <summary>
            /// Enum MONTHLY for value: MONTHLY
            /// </summary>
            [EnumMember(Value = "MONTHLY")]
            MONTHLY = 3,

            /// <summary>
            /// Enum YEARLY for value: YEARLY
            /// </summary>
            [EnumMember(Value = "YEARLY")]
            YEARLY = 4
        }

        /// <summary>
        /// The interval at which the customer is charged for the subscription.
        /// </summary>
        /// <value>The interval at which the customer is charged for the subscription.</value>
        /*
        <example>YEAR</example>
        */
        [DataMember(Name = "cycle", EmitDefaultValue = false)]
        public CycleEnum? Cycle { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestSubscriptionPlan" /> class.
        /// </summary>
        /// <param name="active">active.</param>
        /// <param name="cycle">The interval at which the customer is charged for the subscription..</param>
        /// <param name="frequency">Interval at which a customer receives a product or service as part of a subscription plan..</param>
        /// <param name="id">id.</param>
        /// <param name="numberOfCycles">numberOfCycles.</param>
        /// <param name="planPrice">planPrice.</param>
        /// <param name="subscriptionPlanIndex">Subscription plan identifier..</param>
        /// <param name="subscriptionPlanName">subscriptionPlanName.</param>
        public RestSubscriptionPlan(bool active = default, CycleEnum? cycle = default, int frequency = default, string id = default, int numberOfCycles = default, CurrencyValue planPrice = default, int subscriptionPlanIndex = default, string subscriptionPlanName = default)
        {
            this.Active = active;
            this.Cycle = cycle;
            this.Frequency = frequency;
            this.Id = id;
            this.NumberOfCycles = numberOfCycles;
            this.PlanPrice = planPrice;
            this.SubscriptionPlanIndex = subscriptionPlanIndex;
            this.SubscriptionPlanName = subscriptionPlanName;
        }

        /// <summary>
        /// Gets or Sets Active
        /// </summary>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// Interval at which a customer receives a product or service as part of a subscription plan.
        /// </summary>
        /// <value>Interval at which a customer receives a product or service as part of a subscription plan.</value>
        /*
        <example>2</example>
        */
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public int Frequency { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfCycles
        /// </summary>
        [DataMember(Name = "number_of_cycles", EmitDefaultValue = false)]
        public int NumberOfCycles { get; set; }

        /// <summary>
        /// Gets or Sets PlanPrice
        /// </summary>
        [DataMember(Name = "plan_price", EmitDefaultValue = false)]
        public CurrencyValue PlanPrice { get; set; }

        /// <summary>
        /// Subscription plan identifier.
        /// </summary>
        /// <value>Subscription plan identifier.</value>
        /*
        <example>99</example>
        */
        [DataMember(Name = "subscription_plan_index", EmitDefaultValue = false)]
        public int SubscriptionPlanIndex { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionPlanName
        /// </summary>
        [DataMember(Name = "subscription_plan_name", EmitDefaultValue = false)]
        public string SubscriptionPlanName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestSubscriptionPlan {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  Cycle: ").Append(Cycle).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  NumberOfCycles: ").Append(NumberOfCycles).Append("\n");
            sb.Append("  PlanPrice: ").Append(PlanPrice).Append("\n");
            sb.Append("  SubscriptionPlanIndex: ").Append(SubscriptionPlanIndex).Append("\n");
            sb.Append("  SubscriptionPlanName: ").Append(SubscriptionPlanName).Append("\n");
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
