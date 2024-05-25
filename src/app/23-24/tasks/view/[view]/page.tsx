const Airtable = require('airtable');
 
const getTasksForView = async ({baseId, table, view}: {baseId: string, table: string, view: string}) => {
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
  const theRecords: any[] = []; // Explicitly declare the type of theRecords as an array of any type.
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


export default async function Page({ params }: { params: { view: string } }) {
  const data = await getTasksForView({
    baseId: process.env.AIRTABLE_DO_YOUR_WORK_BASE,
    table: "Tasks",
    view: params.view
  })

    return (
      <div>
        theView: {params.view}
        {
          data.map((record, i)=>{ return (
            <div key={i}>
              <h3>{record.fields.Title}</h3>
              <p>{record.fields.Description || "No Description"}</p>
            </div>
          )})
        }
        <h2>all the data</h2>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    )
}
  
  
  