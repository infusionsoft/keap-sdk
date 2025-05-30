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
import com.keap.core.sdk.model.StageDetails;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * OpportunityStage
 */
@JsonPropertyOrder({
  OpportunityStage.JSON_PROPERTY_DETAILS,
  OpportunityStage.JSON_PROPERTY_ID,
  OpportunityStage.JSON_PROPERTY_NAME,
  OpportunityStage.JSON_PROPERTY_REASONS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class OpportunityStage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DETAILS = "details";
  @jakarta.annotation.Nullable  private StageDetails details;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nonnull  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_REASONS = "reasons";
  @jakarta.annotation.Nullable  private List<String> reasons = new ArrayList<>();

  public OpportunityStage() { 
  }

  public OpportunityStage details(@jakarta.annotation.Nullable StageDetails details) {
    this.details = details;
    return this;
  }

  /**
   * Get details
   * @return details
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DETAILS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public StageDetails getDetails() {
    return details;
  }


  @JsonProperty(JSON_PROPERTY_DETAILS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDetails(@jakarta.annotation.Nullable StageDetails details) {
    this.details = details;
  }


  public OpportunityStage id(@jakarta.annotation.Nonnull String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "0", requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(@jakarta.annotation.Nonnull String id) {
    this.id = id;
  }


  public OpportunityStage name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public OpportunityStage reasons(@jakarta.annotation.Nullable List<String> reasons) {
    this.reasons = reasons;
    return this;
  }

  public OpportunityStage addReasonsItem(String reasonsItem) {
    if (this.reasons == null) {
      this.reasons = new ArrayList<>();
    }
    this.reasons.add(reasonsItem);
    return this;
  }

  /**
   * Get reasons
   * @return reasons
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REASONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getReasons() {
    return reasons;
  }


  @JsonProperty(JSON_PROPERTY_REASONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReasons(@jakarta.annotation.Nullable List<String> reasons) {
    this.reasons = reasons;
  }

  /**
   * Return true if this OpportunityStage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OpportunityStage opportunityStage = (OpportunityStage) o;
    return Objects.equals(this.details, opportunityStage.details) &&
        Objects.equals(this.id, opportunityStage.id) &&
        Objects.equals(this.name, opportunityStage.name) &&
        Objects.equals(this.reasons, opportunityStage.reasons);
  }

  @Override
  public int hashCode() {
    return Objects.hash(details, id, name, reasons);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OpportunityStage {\n");
    sb.append("    details: ").append(toIndentedString(details)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    reasons: ").append(toIndentedString(reasons)).append("\n");
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
    
        private OpportunityStage instance;
    
        public Builder() {
          this(new OpportunityStage());
        }
    
        protected Builder(OpportunityStage instance) {
          this.instance = instance;
        }
    
        public OpportunityStage.Builder details(StageDetails details) {
              this.instance.details = details;
          return this;
        }
            public OpportunityStage.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public OpportunityStage.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public OpportunityStage.Builder reasons(List<String> reasons) {
              this.instance.reasons = reasons;
          return this;
        }
        
    
        /**
        * returns a built OpportunityStage instance.
        *
        * The builder is not reusable.
        */
        public OpportunityStage build() {
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
      public static OpportunityStage.Builder builder() {
        return new OpportunityStage.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public OpportunityStage.Builder toBuilder() {
        return new OpportunityStage.Builder()
          .details(getDetails())
          .id(getId())
          .name(getName())
          .reasons(getReasons());
      }
}

