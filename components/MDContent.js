import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {useRouter} from 'next/router'

function BackLinks({linkList}) {

    return (<div className="note-footer">
            <h3 className="backlink-heading">Link to this note</h3>
        {(linkList != null && linkList.length > 0)
            ?
            <>

                <div className="backlink-container">
                    {linkList.map(aLink =>
                        <div key={aLink.slug} className="backlink">
                            {/*<Link href={aLink.slug}>*/}
                            <a href={aLink.slug}>
                                <p className="backlink-title">{aLink.title}</p>
                                <p className="backlink-preview">{aLink.shortSummary} </p>
                            </a>
                            {/*</Link>*/}
                        </div>
                    )}
                </div>
            </>
            : <> <p className="no-backlinks"> No backlinks found</p> </>}
    </div>);
}

function MDContent({content, backLinks, handleOpenNewContent}) {

    function handleInternalLinkClick() {
        //Processing fetching
        //pass result up to parent container
        //TODO: handle clicking on internal link, go fetching md content from file then passing it up to parent
        handleOpenNewContent(content)
    }

    useRouter();
    return (

        <div className="markdown-rendered">
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
}

export default MDContent;