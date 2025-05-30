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
import com.keap.core.sdk.model.TaggedCompany;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListTaggedCompaniesResponse
 */
@JsonPropertyOrder({
  ListTaggedCompaniesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListTaggedCompaniesResponse.JSON_PROPERTY_TAGGED_COMPANIES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ListTaggedCompaniesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_TAGGED_COMPANIES = "tagged_companies";
  @jakarta.annotation.Nullable  private List<@Valid TaggedCompany> taggedCompanies = new ArrayList<>();

  public ListTaggedCompaniesResponse() { 
  }

  public ListTaggedCompaniesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }


  public ListTaggedCompaniesResponse taggedCompanies(@jakarta.annotation.Nullable List<@Valid TaggedCompany> taggedCompanies) {
    this.taggedCompanies = taggedCompanies;
    return this;
  }

  public ListTaggedCompaniesResponse addTaggedCompaniesItem(TaggedCompany taggedCompaniesItem) {
    if (this.taggedCompanies == null) {
      this.taggedCompanies = new ArrayList<>();
    }
    this.taggedCompanies.add(taggedCompaniesItem);
    return this;
  }

  /**
   * Get taggedCompanies
   * @return taggedCompanies
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TAGGED_COMPANIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid TaggedCompany> getTaggedCompanies() {
    return taggedCompanies;
  }


  @JsonProperty(JSON_PROPERTY_TAGGED_COMPANIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTaggedCompanies(@jakarta.annotation.Nullable List<@Valid TaggedCompany> taggedCompanies) {
    this.taggedCompanies = taggedCompanies;
  }

  /**
   * Return true if this ListTaggedCompaniesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListTaggedCompaniesResponse listTaggedCompaniesResponse = (ListTaggedCompaniesResponse) o;
    return Objects.equals(this.nextPageToken, listTaggedCompaniesResponse.nextPageToken) &&
        Objects.equals(this.taggedCompanies, listTaggedCompaniesResponse.taggedCompanies);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, taggedCompanies);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListTaggedCompaniesResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    taggedCompanies: ").append(toIndentedString(taggedCompanies)).append("\n");
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
    
        private ListTaggedCompaniesResponse instance;
    
        public Builder() {
          this(new ListTaggedCompaniesResponse());
        }
    
        protected Builder(ListTaggedCompaniesResponse instance) {
          this.instance = instance;
        }
    
        public ListTaggedCompaniesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListTaggedCompaniesResponse.Builder taggedCompanies(List<TaggedCompany> taggedCompanies) {
              this.instance.taggedCompanies = taggedCompanies;
          return this;
        }
        
    
        /**
        * returns a built ListTaggedCompaniesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListTaggedCompaniesResponse build() {
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
      public static ListTaggedCompaniesResponse.Builder builder() {
        return new ListTaggedCompaniesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListTaggedCompaniesResponse.Builder toBuilder() {
        return new ListTaggedCompaniesResponse.Builder()
          .nextPageToken(getNextPageToken())
          .taggedCompanies(getTaggedCompanies());
      }
}

