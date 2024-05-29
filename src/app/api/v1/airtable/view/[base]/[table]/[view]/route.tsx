import { NextResponse } from 'next/server'
import Airtable from 'airtable'


type AirtableDataParams = {
  baseId: string;
  table: string;
  view: string;
};

const getAirtableData = async ({baseId, table, view}: AirtableDataParams) => {
    const theRecords: any[] = [];
    console.log(`looking for ${view} in ${baseId} in table ${table}`)
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    await base(table).select(
      {
        maxRecords: 100,
        view: view,
      }
    ).eachPage(function page(records, next){
      theRecords.push(...records);
      next()
    })
    .catch(err=>{console.error(err); return})
    return theRecords;
}

type ParamsType = { base: string; table: string; view: string; };

export async function GET( request: Request, { params }: {params: ParamsType} ) {
  
    try {
        const records = await getAirtableData({
            baseId: params.base,
            table: params.table,
            view: params.view
        });
        return NextResponse.json({ params: params, records: records})
    } catch (error) {
        console.error(error)
        return NextResponse.json({ params: params, records: "no data"})
    }
}