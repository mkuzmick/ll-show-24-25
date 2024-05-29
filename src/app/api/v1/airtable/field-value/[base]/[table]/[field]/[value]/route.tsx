import { NextResponse } from 'next/server'
import Airtable from 'airtable'

type AirtableDataParams = {
  baseId: string;
  table: string;
  field: string;
  value: string;
};

const getAirtableData = async ({baseId, table, field, value}: AirtableDataParams) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    const theRecords: object[] = [];
    console.log(`looking for ${value} in ${field} in table ${table}`)
    await base(table).select(
      {
        maxRecords: 100,
        view: "MAIN",
        filterByFormula: `${field}="${value}"`
      }
    ).eachPage(function page(records, next){
      theRecords.push(...records);
      next()
    })
    .catch(err=>{console.error(err); return})
    return theRecords;
}

type ParamsType = {
  base: string;
  table: string;
  field: string;
  value: string;
};


export async function GET( request: Request , { params }: { params: ParamsType} ) {
    try {
        const records = await getAirtableData({
            baseId: params.base,
            table: params.table,
            field: params.field,
            value: params.value
        });
        return NextResponse.json({ params: params, result: records})
    } catch (error) {
        return NextResponse.json({ params: params, result: "no data"})
    }
}