import Highlight from 'react-highlight'
import ToggleContent from 'Shared/ToggleContent'
import DocLink from 'Shared/DocLink/DocLink';
import AssistScript from './AssistScript'
import AssistNpm from './AssistNpm'
import { Tabs } from 'UI';
import { useState } from 'react';

const NPM = 'NPM'
const SCRIPT = 'SCRIPT'
const TABS = [
  { key: SCRIPT, text: SCRIPT },
  { key: NPM, text: NPM },
]

const AssistDoc = (props) => {
  const { projectKey } = props;
  const [activeTab, setActiveTab] = useState(SCRIPT)
  

  const renderActiveTab = () => {
    switch (activeTab) {
      case SCRIPT:
        return <AssistScript projectKey={projectKey} />
      case NPM:
        return <AssistNpm  projectKey={projectKey} />
    }
    return null;
  }


  return (
    <div className="p-4">
      <div>OpenReplay Assist allows you to support your users by seeing their live screen and instantly hopping on call (WebRTC) with them without requiring any 3rd-party screen sharing software.</div>

      <div className="font-bold my-2">Installation</div>
      <Highlight className="js">
        {`npm i @openreplay/tracker-assist`}
      </Highlight>
      <div className="mb-4" />

      <div className="font-bold my-2">Usage</div>
      <Tabs
        tabs={ TABS }
        active={ activeTab } onClick={ (tab) => setActiveTab(tab) }
      />

      <div className="py-5">
        { renderActiveTab() }
      </div>

      <DocLink className="mt-4" label="Install Assist" url="https://docs.openreplay.com/installation/assist" />
    </div>
  )
};

AssistDoc.displayName = "AssistDoc";

export default AssistDoc;
