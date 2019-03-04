import { html } from '@polymer/lit-element'

export const Styles = html`
<link rel="stylesheet" href="css/all.css">
<!-- css -->
<style>
:host{
margin:0;
font-size:1rem;
}

.wrapper{
  border: 1px solid #000;
  width:400px;
  margin:10px auto;
  border-radius:10px;
  padding:5px;
}

input, textarea{
  background: transparent;
  border: 1px solid black;
  border-radius: 3px;
  color: inherit;
}

button{
  background-color:dodgerblue;
}

</style>
`
