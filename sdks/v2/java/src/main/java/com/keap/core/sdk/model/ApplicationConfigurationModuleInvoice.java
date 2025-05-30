/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ApplicationConfigurationModuleInvoice
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleInvoice.JSON_PROPERTY_TAX_LABEL
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ApplicationConfigurationModuleInvoice implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TAX_LABEL = "tax_label";
  @jakarta.annotation.Nullable  private String taxLabel;

  public ApplicationConfigurationModuleInvoice() { 
  }

  public ApplicationConfigurationModuleInvoice taxLabel(@jakarta.annotation.Nullable String taxLabel) {
    this.taxLabel = taxLabel;
    return this;
  }

  /**
   * Get taxLabel
   * @return taxLabel
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TAX_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTaxLabel() {
    return taxLabel;
  }


  @JsonProperty(JSON_PROPERTY_TAX_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTaxLabel(@jakarta.annotation.Nullable String taxLabel) {
    this.taxLabel = taxLabel;
  }

  /**
   * Return true if this ApplicationConfigurationModuleInvoice object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleInvoice applicationConfigurationModuleInvoice = (ApplicationConfigurationModuleInvoice) o;
    return Objects.equals(this.taxLabel, applicationConfigurationModuleInvoice.taxLabel);
  }

  @Override
  public int hashCode() {
    return Objects.hash(taxLabel);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleInvoice {\n");
    sb.append("    taxLabel: ").append(toIndentedString(taxLabel)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private ApplicationConfigurationModuleInvoice instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleInvoice());
        }
    
        protected Builder(ApplicationConfigurationModuleInvoice instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleInvoice.Builder taxLabel(String taxLabel) {
              this.instance.taxLabel = taxLabel;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleInvoice instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleInvoice build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static ApplicationConfigurationModuleInvoice.Builder builder() {
        return new ApplicationConfigurationModuleInvoice.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleInvoice.Builder toBuilder() {
        return new ApplicationConfigurationModuleInvoice.Builder()
          .taxLabel(getTaxLabel());
      }
}

