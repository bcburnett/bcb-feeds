import { html } from '@polymer/lit-element'

export const Styles = html`
<link rel="stylesheet" href="css/all.css">
<!-- css -->
<style>
:host{
margin:0;
font-size:1rem;
background-color:transparent;
text-align:center;
}

img{
  border-radius: 4px;
  max-width:75px;
  max-height:75px;
}

img:hover{
  max-width:300px;
  max-height:300px;
}

textarea{
  background: transparent;
  border: 1px solid black;
  border-radius: 3px;
  color: inherit;
  height: 75px;
  margin: 5px 7px;
  width:350px;
}


</style>
`
