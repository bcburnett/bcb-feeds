import { html } from '@polymer/lit-element'

export const Styles = html`
<link rel="stylesheet" href="css/all.css">
<!-- css -->
<style>

:host{
margin:0;
font-size:1rem;
}

input{
  background:rgba(0,0,0,0);
  border: none;
  border-bottom: 1px solid black;
  color:inherit;
}

.chatDiv{
  width:350px;
  height: 250px;
  overflow:auto;
  border: 1px solid black;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  margin: 10px auto;
  text-align:left;
  padding: 10px;
}

</style>
`
