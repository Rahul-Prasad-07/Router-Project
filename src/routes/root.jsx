// Create the root layout component

export default function Root(){

    return (
        <>

        <div id="sidebar">

            <h1> React Router Contacts</h1>
            <div>
                <form id="search-form" role="search">

                    <input id="q" arial-label="Search contacts" placeholder="Search" type="search" name="q" />
                    <div id="search-spinner" aria-hidden hidden ={true} />
                    <div className="sr-only" aria-alive="polite"> </div>
                </form>

                <form method="post">
                    <button type="submit"> new </button>
                </form>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href={`/contacts/1`}> Your Name </a>
                    </li>
                    <li>
                        <a href={`/contacts/2`}> Your friend</a>
                    </li>
                </ul>
            </nav>

        </div>
        <div id="detail"></div>
        
        </>
    )

}


