<?php

namespace Draughts\DraughtsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Draughts\DraughtsBundle\Entity\Draughts
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Draughts
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string $name
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var integer $playerId
     *
     * @ORM\Column(name="playerId", type="integer")
     */
    private $playerId;

    /**
     * @var text $description
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var string $array
     *
     * @ORM\Column(name="array", type="string", length=255)
     */
   /* private $array; */


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set playerId
     *
     * @param integer $playerId
     */
    public function setPlayerId($playerId)
    {
        $this->playerId = $playerId;
    }

    /**
     * Get playerId
     *
     * @return integer 
     */
    public function getPlayerId()
    {
        return $this->playerId;
    }

    /**
     * Set description
     *
     * @param text $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Get description
     *
     * @return text 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set array
     *
     * @param string $array
     */
   /* public function setArray($array)
    {
        $this->array = $array;
    }
*/
    /**
     * Get array
     *
     * @return string 
     */
/*    public function getArray()
    {
        return $this->array;
    }*/
}