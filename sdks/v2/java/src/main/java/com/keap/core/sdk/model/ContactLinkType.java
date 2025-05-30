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
 * ContactLinkType
 */
@JsonPropertyOrder({
  ContactLinkType.JSON_PROPERTY_ID,
  ContactLinkType.JSON_PROPERTY_MAX_LINKS,
  ContactLinkType.JSON_PROPERTY_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ContactLinkType implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_MAX_LINKS = "max_links";
  @jakarta.annotation.Nullable  private Long maxLinks;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public ContactLinkType() { 
  }

  public ContactLinkType id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public ContactLinkType maxLinks(@jakarta.annotation.Nullable Long maxLinks) {
    this.maxLinks = maxLinks;
    return this;
  }

  /**
   * Get maxLinks
   * @return maxLinks
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MAX_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getMaxLinks() {
    return maxLinks;
  }


  @JsonProperty(JSON_PROPERTY_MAX_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxLinks(@jakarta.annotation.Nullable Long maxLinks) {
    this.maxLinks = maxLinks;
  }


  public ContactLinkType name(@jakarta.annotation.Nullable String name) {
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

  /**
   * Return true if this ContactLinkType object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContactLinkType contactLinkType = (ContactLinkType) o;
    return Objects.equals(this.id, contactLinkType.id) &&
        Objects.equals(this.maxLinks, contactLinkType.maxLinks) &&
        Objects.equals(this.name, contactLinkType.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, maxLinks, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContactLinkType {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    maxLinks: ").append(toIndentedString(maxLinks)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private ContactLinkType instance;
    
        public Builder() {
          this(new ContactLinkType());
        }
    
        protected Builder(ContactLinkType instance) {
          this.instance = instance;
        }
    
        public ContactLinkType.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ContactLinkType.Builder maxLinks(Long maxLinks) {
              this.instance.maxLinks = maxLinks;
          return this;
        }
            public ContactLinkType.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
        
    
        /**
        * returns a built ContactLinkType instance.
        *
        * The builder is not reusable.
        */
        public ContactLinkType build() {
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
      public static ContactLinkType.Builder builder() {
        return new ContactLinkType.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ContactLinkType.Builder toBuilder() {
        return new ContactLinkType.Builder()
          .id(getId())
          .maxLinks(getMaxLinks())
          .name(getName());
      }
}

