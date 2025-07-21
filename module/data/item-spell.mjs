import rt87ItemBase from './base-item.mjs';

export default class rt87Spell extends rt87ItemBase {
  static LOCALIZATION_PREFIXES = [
    'RT87.Item.base',
    'RT87.Item.Spell',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.spellLevel = new fields.NumberField({
      required: true,
      nullable: false,
      integer: true,
      initial: 1,
      min: 1,
      max: 4,
    });

    return schema;
  }
}
