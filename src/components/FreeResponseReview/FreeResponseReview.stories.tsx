import { FreeResponseReview } from "./FreeResponseReview";

const exampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris orci, mattis scelerisque' +
  'tortor non, rhoncus consequat nulla. Cras et auctor nisl, facilisis lobortis quam. ' +
  'Nullam dui ex, molestie non maximus id, vehicula nec augue. Nulla dignissim, dolor ac rutrum sagittis, ' +
  'lorem lacus gravida nunc, ac ullamcorper odio nunc eu lacus. Mauris sit amet lacinia sapien. ' +
  'Fusce mi ante, hendrerit sed rhoncus nec, aliquam vitae diam. Nullam quis ex egestas mi egestas laoreet a non ligula. ' +
  'Nunc vulputate urna vitae nibh pretium, eget tempus enim faucibus.';

export const Default = () => 
  <FreeResponseReview 
    free_response="This is an example free response answer. It can be short or long, and it will display in full." 
  />;
export const PreviewMode = () => 
  <FreeResponseReview 
    free_response={exampleText + exampleText} 
    previewMode
  />;

export const NoResponse = () => 
  <FreeResponseReview 
    free_response="" 
  />;