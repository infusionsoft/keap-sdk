<?php
/**
 * PaymentMethod
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
 * PaymentMethod Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PaymentMethod implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PaymentMethod';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'card_info' => '\Keap\Core\V2\Model\CardInfo',
        'contact_id' => 'string',
        'created_time' => 'string',
        'payment_gateway_id' => 'string',
        'payment_method_id' => 'string',
        'payment_method_type' => 'string',
        'payment_processor_type' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'card_info' => null,
        'contact_id' => null,
        'created_time' => null,
        'payment_gateway_id' => null,
        'payment_method_id' => null,
        'payment_method_type' => null,
        'payment_processor_type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'card_info' => false,
        'contact_id' => false,
        'created_time' => false,
        'payment_gateway_id' => false,
        'payment_method_id' => false,
        'payment_method_type' => false,
        'payment_processor_type' => false
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
        'card_info' => 'card_info',
        'contact_id' => 'contact_id',
        'created_time' => 'created_time',
        'payment_gateway_id' => 'payment_gateway_id',
        'payment_method_id' => 'payment_method_id',
        'payment_method_type' => 'payment_method_type',
        'payment_processor_type' => 'payment_processor_type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'card_info' => 'setCardInfo',
        'contact_id' => 'setContactId',
        'created_time' => 'setCreatedTime',
        'payment_gateway_id' => 'setPaymentGatewayId',
        'payment_method_id' => 'setPaymentMethodId',
        'payment_method_type' => 'setPaymentMethodType',
        'payment_processor_type' => 'setPaymentProcessorType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'card_info' => 'getCardInfo',
        'contact_id' => 'getContactId',
        'created_time' => 'getCreatedTime',
        'payment_gateway_id' => 'getPaymentGatewayId',
        'payment_method_id' => 'getPaymentMethodId',
        'payment_method_type' => 'getPaymentMethodType',
        'payment_processor_type' => 'getPaymentProcessorType'
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

    public const PAYMENT_METHOD_TYPE_CARD = 'CARD';
    public const PAYMENT_PROCESSOR_TYPE_PAYPAL = 'PAYPAL';
    public const PAYMENT_PROCESSOR_TYPE_UNSUPPORTED = 'UNSUPPORTED';
    public const PAYMENT_PROCESSOR_TYPE_AUTHORIZE = 'AUTHORIZE';
    public const PAYMENT_PROCESSOR_TYPE_EWAY = 'EWAY';
    public const PAYMENT_PROCESSOR_TYPE_WEPAY = 'WEPAY';
    public const PAYMENT_PROCESSOR_TYPE_STRIPE = 'STRIPE';
    public const PAYMENT_PROCESSOR_TYPE_KEAP_PAY = 'KEAP_PAY';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPaymentMethodTypeAllowableValues()
    {
        return [
            self::PAYMENT_METHOD_TYPE_CARD,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPaymentProcessorTypeAllowableValues()
    {
        return [
            self::PAYMENT_PROCESSOR_TYPE_PAYPAL,
            self::PAYMENT_PROCESSOR_TYPE_UNSUPPORTED,
            self::PAYMENT_PROCESSOR_TYPE_AUTHORIZE,
            self::PAYMENT_PROCESSOR_TYPE_EWAY,
            self::PAYMENT_PROCESSOR_TYPE_WEPAY,
            self::PAYMENT_PROCESSOR_TYPE_STRIPE,
            self::PAYMENT_PROCESSOR_TYPE_KEAP_PAY,
        ];
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
        $this->setIfExists('card_info', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('created_time', $data ?? [], null);
        $this->setIfExists('payment_gateway_id', $data ?? [], null);
        $this->setIfExists('payment_method_id', $data ?? [], null);
        $this->setIfExists('payment_method_type', $data ?? [], null);
        $this->setIfExists('payment_processor_type', $data ?? [], null);
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

        $allowedValues = $this->getPaymentMethodTypeAllowableValues();
        if (!is_null($this->container['payment_method_type']) && !in_array($this->container['payment_method_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'payment_method_type', must be one of '%s'",
                $this->container['payment_method_type'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getPaymentProcessorTypeAllowableValues();
        if (!is_null($this->container['payment_processor_type']) && !in_array($this->container['payment_processor_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'payment_processor_type', must be one of '%s'",
                $this->container['payment_processor_type'],
                implode("', '", $allowedValues)
            );
        }

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
     * Gets card_info
     *
     * @return \Keap\Core\V2\Model\CardInfo|null
     */
    public function getCardInfo()
    {
        return $this->container['card_info'];
    }

    /**
     * Sets card_info
     *
     * @param \Keap\Core\V2\Model\CardInfo|null $card_info card_info
     *
     * @return self
     */
    public function setCardInfo($card_info)
    {
        if (is_null($card_info)) {
            throw new \InvalidArgumentException('non-nullable card_info cannot be null');
        }
        $this->container['card_info'] = $card_info;

        return $this;
    }

    /**
     * Gets contact_id
     *
     * @return string|null
     */
    public function getContactId()
    {
        return $this->container['contact_id'];
    }

    /**
     * Sets contact_id
     *
     * @param string|null $contact_id contact_id
     *
     * @return self
     */
    public function setContactId($contact_id)
    {
        if (is_null($contact_id)) {
            throw new \InvalidArgumentException('non-nullable contact_id cannot be null');
        }
        $this->container['contact_id'] = $contact_id;

        return $this;
    }

    /**
     * Gets created_time
     *
     * @return string|null
     */
    public function getCreatedTime()
    {
        return $this->container['created_time'];
    }

    /**
     * Sets created_time
     *
     * @param string|null $created_time created_time
     *
     * @return self
     */
    public function setCreatedTime($created_time)
    {
        if (is_null($created_time)) {
            throw new \InvalidArgumentException('non-nullable created_time cannot be null');
        }
        $this->container['created_time'] = $created_time;

        return $this;
    }

    /**
     * Gets payment_gateway_id
     *
     * @return string|null
     */
    public function getPaymentGatewayId()
    {
        return $this->container['payment_gateway_id'];
    }

    /**
     * Sets payment_gateway_id
     *
     * @param string|null $payment_gateway_id payment_gateway_id
     *
     * @return self
     */
    public function setPaymentGatewayId($payment_gateway_id)
    {
        if (is_null($payment_gateway_id)) {
            throw new \InvalidArgumentException('non-nullable payment_gateway_id cannot be null');
        }
        $this->container['payment_gateway_id'] = $payment_gateway_id;

        return $this;
    }

    /**
     * Gets payment_method_id
     *
     * @return string|null
     */
    public function getPaymentMethodId()
    {
        return $this->container['payment_method_id'];
    }

    /**
     * Sets payment_method_id
     *
     * @param string|null $payment_method_id payment_method_id
     *
     * @return self
     */
    public function setPaymentMethodId($payment_method_id)
    {
        if (is_null($payment_method_id)) {
            throw new \InvalidArgumentException('non-nullable payment_method_id cannot be null');
        }
        $this->container['payment_method_id'] = $payment_method_id;

        return $this;
    }

    /**
     * Gets payment_method_type
     *
     * @return string|null
     */
    public function getPaymentMethodType()
    {
        return $this->container['payment_method_type'];
    }

    /**
     * Sets payment_method_type
     *
     * @param string|null $payment_method_type payment_method_type
     *
     * @return self
     */
    public function setPaymentMethodType($payment_method_type)
    {
        if (is_null($payment_method_type)) {
            throw new \InvalidArgumentException('non-nullable payment_method_type cannot be null');
        }
        $allowedValues = $this->getPaymentMethodTypeAllowableValues();
        if (!in_array($payment_method_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'payment_method_type', must be one of '%s'",
                    $payment_method_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['payment_method_type'] = $payment_method_type;

        return $this;
    }

    /**
     * Gets payment_processor_type
     *
     * @return string|null
     */
    public function getPaymentProcessorType()
    {
        return $this->container['payment_processor_type'];
    }

    /**
     * Sets payment_processor_type
     *
     * @param string|null $payment_processor_type payment_processor_type
     *
     * @return self
     */
    public function setPaymentProcessorType($payment_processor_type)
    {
        if (is_null($payment_processor_type)) {
            throw new \InvalidArgumentException('non-nullable payment_processor_type cannot be null');
        }
        $allowedValues = $this->getPaymentProcessorTypeAllowableValues();
        if (!in_array($payment_processor_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'payment_processor_type', must be one of '%s'",
                    $payment_processor_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['payment_processor_type'] = $payment_processor_type;

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


