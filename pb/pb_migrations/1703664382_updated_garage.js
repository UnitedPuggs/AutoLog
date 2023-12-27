/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnq047uylzcqqyb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhwthbnn",
    "name": "last_service",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnq047uylzcqqyb")

  // remove
  collection.schema.removeField("zhwthbnn")

  return dao.saveCollection(collection)
})
