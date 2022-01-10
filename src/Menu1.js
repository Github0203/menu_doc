import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
  <nav className="navbar navbar-default NOnavbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed menu-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="NOnavbar-brand" href="#1">
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Talk Fusion" />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <span className="glyphicon glyphicon-share hidden-xs pull-right share-link" aria-hidden="true" />
        {/* Collect the nav links, forms, and other content for toggling */}
        {/*           <img class="center-block" id="connectLogo" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt=""> */}
        {/* <div id="btnShare" style="display: none;"><img src="share.svg" width="22" alt="share"></div> */}
      </div>
      {/*
  <button type="button" class="share-link hidden-xs pull-right">
    <span class="sr-only">Share link</span>
    <span class="glyphicon glyphicon-link"></span>
  </button> */}
    </div>
  </nav>
  <div id="wrapper">
    {/* Sidebar */}
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a href="#1">
            Start Bootstrap
          </a>
        </li>
        <li>
          <a href="#1">Dashboard</a>
        </li>
        <li>
          <a href="#1">Shortcuts</a>
        </li>
        <li>
          <a href="#1">Overview</a>
        </li>
        <li>
          <a href="#1">Events</a>
        </li>
        <li>
          <a href="#1">About</a>
        </li>
        <li>
          <a href="#1">Services</a>
        </li>
        <li>
          <a href="#1">Contact</a>
        </li>
      </ul>
    </div>
    {/* /#1sidebar-wrapper */}
    {/* Page Content */}
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>Simple Sidebar</h1>
            <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
            <p>Make sure to keep all page content within the <code>#1page-content-wrapper</code>.</p>
            <a href="#menu-toggle" className="btn btn-default menu-toggle">Toggle Menu</a>
          </div>
        </div>
      </div>
    </div>
    {/* /#1page-content-wrapper */}
  </div>
  {/* /#1wrapper */}
</div>

        )
    }
}
