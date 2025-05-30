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
 * UpdateEmailAddress
 */
@JsonPropertyOrder({
  UpdateEmailAddress.JSON_PROPERTY_OPTED_IN,
  UpdateEmailAddress.JSON_PROPERTY_REASON
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class UpdateEmailAddress implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OPTED_IN = "opted_in";
  @jakarta.annotation.Nonnull  private Boolean optedIn;

  public static final String JSON_PROPERTY_REASON = "reason";
  @jakarta.annotation.Nonnull  private String reason;

  public UpdateEmailAddress() { 
  }

  public UpdateEmailAddress optedIn(@jakarta.annotation.Nonnull Boolean optedIn) {
    this.optedIn = optedIn;
    return this;
  }

  /**
   * Get optedIn
   * @return optedIn
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPTED_IN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Boolean getOptedIn() {
    return optedIn;
  }


  @JsonProperty(JSON_PROPERTY_OPTED_IN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOptedIn(@jakarta.annotation.Nonnull Boolean optedIn) {
    this.optedIn = optedIn;
  }


  public UpdateEmailAddress reason(@jakarta.annotation.Nonnull String reason) {
    this.reason = reason;
    return this;
  }

  /**
   * Get reason
   * @return reason
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REASON)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getReason() {
    return reason;
  }


  @JsonProperty(JSON_PROPERTY_REASON)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setReason(@jakarta.annotation.Nonnull String reason) {
    this.reason = reason;
  }

  /**
   * Return true if this UpdateEmailAddress object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateEmailAddress updateEmailAddress = (UpdateEmailAddress) o;
    return Objects.equals(this.optedIn, updateEmailAddress.optedIn) &&
        Objects.equals(this.reason, updateEmailAddress.reason);
  }

  @Override
  public int hashCode() {
    return Objects.hash(optedIn, reason);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateEmailAddress {\n");
    sb.append("    optedIn: ").append(toIndentedString(optedIn)).append("\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
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
    
        private UpdateEmailAddress instance;
    
        public Builder() {
          this(new UpdateEmailAddress());
        }
    
        protected Builder(UpdateEmailAddress instance) {
          this.instance = instance;
        }
    
        public UpdateEmailAddress.Builder optedIn(Boolean optedIn) {
              this.instance.optedIn = optedIn;
          return this;
        }
            public UpdateEmailAddress.Builder reason(String reason) {
              this.instance.reason = reason;
          return this;
        }
        
    
        /**
        * returns a built UpdateEmailAddress instance.
        *
        * The builder is not reusable.
        */
        public UpdateEmailAddress build() {
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
      public static UpdateEmailAddress.Builder builder() {
        return new UpdateEmailAddress.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateEmailAddress.Builder toBuilder() {
        return new UpdateEmailAddress.Builder()
          .optedIn(getOptedIn())
          .reason(getReason());
      }
}

