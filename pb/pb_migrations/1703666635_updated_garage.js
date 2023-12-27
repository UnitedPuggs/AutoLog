/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnq047uylzcqqyb")

  // remove
  collection.schema.removeField("x3qaqrtw")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnq047uylzcqqyb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3qaqrtw",
    "name": "user",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
