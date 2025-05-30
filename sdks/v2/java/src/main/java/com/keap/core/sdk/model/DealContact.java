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
 * Represents a contact entity in the system.
 */
@Schema(description = "Represents a contact entity in the system.")
@JsonPropertyOrder({
  DealContact.JSON_PROPERTY_ID,
  DealContact.JSON_PROPERTY_PRIMARY_CONTACT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class DealContact implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PRIMARY_CONTACT = "primary_contact";
  @jakarta.annotation.Nonnull  private Boolean primaryContact;

  public DealContact() { 
  }

  public DealContact id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Unique identifier for the model.
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Unique identifier for the model.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public DealContact primaryContact(@jakarta.annotation.Nonnull Boolean primaryContact) {
    this.primaryContact = primaryContact;
    return this;
  }

  /**
   * Indicates if this contact is the primary contact. This field is required.
   * @return primaryContact
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "Indicates if this contact is the primary contact. This field is required.")
  @JsonProperty(JSON_PROPERTY_PRIMARY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Boolean getPrimaryContact() {
    return primaryContact;
  }


  @JsonProperty(JSON_PROPERTY_PRIMARY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPrimaryContact(@jakarta.annotation.Nonnull Boolean primaryContact) {
    this.primaryContact = primaryContact;
  }

  /**
   * Return true if this DealContact object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DealContact dealContact = (DealContact) o;
    return Objects.equals(this.id, dealContact.id) &&
        Objects.equals(this.primaryContact, dealContact.primaryContact);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, primaryContact);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DealContact {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    primaryContact: ").append(toIndentedString(primaryContact)).append("\n");
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
    
        private DealContact instance;
    
        public Builder() {
          this(new DealContact());
        }
    
        protected Builder(DealContact instance) {
          this.instance = instance;
        }
    
        public DealContact.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public DealContact.Builder primaryContact(Boolean primaryContact) {
              this.instance.primaryContact = primaryContact;
          return this;
        }
        
    
        /**
        * returns a built DealContact instance.
        *
        * The builder is not reusable.
        */
        public DealContact build() {
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
      public static DealContact.Builder builder() {
        return new DealContact.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DealContact.Builder toBuilder() {
        return new DealContact.Builder()
          .id(getId())
          .primaryContact(getPrimaryContact());
      }
}

