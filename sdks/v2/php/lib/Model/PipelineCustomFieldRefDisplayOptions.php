<?php
/**
 * PipelineCustomFieldRefDisplayOptions
 *
 * PHP version 8.1
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.13.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Core\V2\Model;

use \ArrayAccess;
use \Keap\Core\V2\ObjectSerializer;

/**
 * PipelineCustomFieldRefDisplayOptions Class Doc Comment
 *
 * @category Class
 * @description Class representing the display options for a reference custom field.
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PipelineCustomFieldRefDisplayOptions implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PipelineCustomFieldRefDisplayOptions';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'hidden' => 'bool',
        'card_options' => '\Keap\Core\V2\Model\PipelineCustomFieldCardDisplayOptions',
        'title_property' => 'string',
        'description_property' => 'string',
        'reference_display_type' => '\Keap\Core\V2\Model\PipelineCustomFieldRefDisplayType',
        'empty_state' => '\Keap\Core\V2\Model\PipelineCustomFieldEmptyStateContent',
        'component_name' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'hidden' => null,
        'card_options' => null,
        'title_property' => null,
        'description_property' => null,
        'reference_display_type' => null,
        'empty_state' => null,
        'component_name' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'hidden' => true,
        'card_options' => true,
        'title_property' => true,
        'description_property' => true,
        'reference_display_type' => true,
        'empty_state' => true,
        'component_name' => true
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'hidden' => 'hidden',
        'card_options' => 'card_options',
        'title_property' => 'title_property',
        'description_property' => 'description_property',
        'reference_display_type' => 'reference_display_type',
        'empty_state' => 'empty_state',
        'component_name' => 'component_name'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'hidden' => 'setHidden',
        'card_options' => 'setCardOptions',
        'title_property' => 'setTitleProperty',
        'description_property' => 'setDescriptionProperty',
        'reference_display_type' => 'setReferenceDisplayType',
        'empty_state' => 'setEmptyState',
        'component_name' => 'setComponentName'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'hidden' => 'getHidden',
        'card_options' => 'getCardOptions',
        'title_property' => 'getTitleProperty',
        'description_property' => 'getDescriptionProperty',
        'reference_display_type' => 'getReferenceDisplayType',
        'empty_state' => 'getEmptyState',
        'component_name' => 'getComponentName'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[]|null $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('hidden', $data ?? [], null);
        $this->setIfExists('card_options', $data ?? [], null);
        $this->setIfExists('title_property', $data ?? [], null);
        $this->setIfExists('description_property', $data ?? [], null);
        $this->setIfExists('reference_display_type', $data ?? [], null);
        $this->setIfExists('empty_state', $data ?? [], null);
        $this->setIfExists('component_name', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets hidden
     *
     * @return bool|null
     */
    public function getHidden()
    {
        return $this->container['hidden'];
    }

    /**
     * Sets hidden
     *
     * @param bool|null $hidden Indicates whether the reference custom field is hidden.
     *
     * @return self
     */
    public function setHidden($hidden)
    {
        if (is_null($hidden)) {
            array_push($this->openAPINullablesSetToNull, 'hidden');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('hidden', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['hidden'] = $hidden;

        return $this;
    }

    /**
     * Gets card_options
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldCardDisplayOptions|null
     */
    public function getCardOptions()
    {
        return $this->container['card_options'];
    }

    /**
     * Sets card_options
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldCardDisplayOptions|null $card_options The card display options for the reference custom field. This field is optional.
     *
     * @return self
     */
    public function setCardOptions($card_options)
    {
        if (is_null($card_options)) {
            array_push($this->openAPINullablesSetToNull, 'card_options');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('card_options', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['card_options'] = $card_options;

        return $this;
    }

    /**
     * Gets title_property
     *
     * @return string|null
     */
    public function getTitleProperty()
    {
        return $this->container['title_property'];
    }

    /**
     * Sets title_property
     *
     * @param string|null $title_property The title property for the reference custom field.
     *
     * @return self
     */
    public function setTitleProperty($title_property)
    {
        if (is_null($title_property)) {
            array_push($this->openAPINullablesSetToNull, 'title_property');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('title_property', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['title_property'] = $title_property;

        return $this;
    }

    /**
     * Gets description_property
     *
     * @return string|null
     */
    public function getDescriptionProperty()
    {
        return $this->container['description_property'];
    }

    /**
     * Sets description_property
     *
     * @param string|null $description_property The description property for the reference custom field.
     *
     * @return self
     */
    public function setDescriptionProperty($description_property)
    {
        if (is_null($description_property)) {
            array_push($this->openAPINullablesSetToNull, 'description_property');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('description_property', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['description_property'] = $description_property;

        return $this;
    }

    /**
     * Gets reference_display_type
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldRefDisplayType|null
     */
    public function getReferenceDisplayType()
    {
        return $this->container['reference_display_type'];
    }

    /**
     * Sets reference_display_type
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldRefDisplayType|null $reference_display_type The display type for the reference custom field. This field is optional.
     *
     * @return self
     */
    public function setReferenceDisplayType($reference_display_type)
    {
        if (is_null($reference_display_type)) {
            array_push($this->openAPINullablesSetToNull, 'reference_display_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('reference_display_type', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['reference_display_type'] = $reference_display_type;

        return $this;
    }

    /**
     * Gets empty_state
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldEmptyStateContent|null
     */
    public function getEmptyState()
    {
        return $this->container['empty_state'];
    }

    /**
     * Sets empty_state
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldEmptyStateContent|null $empty_state The empty state content for the reference custom field. This field is optional.
     *
     * @return self
     */
    public function setEmptyState($empty_state)
    {
        if (is_null($empty_state)) {
            array_push($this->openAPINullablesSetToNull, 'empty_state');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('empty_state', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['empty_state'] = $empty_state;

        return $this;
    }

    /**
     * Gets component_name
     *
     * @return string|null
     */
    public function getComponentName()
    {
        return $this->container['component_name'];
    }

    /**
     * Sets component_name
     *
     * @param string|null $component_name The component name for the reference custom field.
     *
     * @return self
     */
    public function setComponentName($component_name)
    {
        if (is_null($component_name)) {
            array_push($this->openAPINullablesSetToNull, 'component_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('component_name', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['component_name'] = $component_name;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


