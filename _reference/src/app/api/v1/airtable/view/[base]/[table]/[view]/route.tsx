import { NextResponse } from 'next/server'
import Airtable from 'airtable'


const getAirtableData = async ({baseId, table, view}) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    const theRecords = [];
    console.log(`looking for ${value} in ${field} in table ${table}`)
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

export async function GET( request, { params } ) {
    try {
        const records = await getAirtableData({
            baseId: params.base,
            table: params.table,
            view: params.view
        });
        return NextResponse.json({ params: params, records: records})
    } catch (error) {
        return NextResponse.json({ params: params, records: "no data"})
    }
}