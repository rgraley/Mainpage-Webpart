import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MainpageWebpart.module.scss';
import * as strings from 'MainpageWebpartStrings';
require('../../../pp_assets/consumerPortalCss2.css');
require('../../../pp_assets/consumerPortalCss3.css');
export interface IMainpageWebpartProps {
  description: string;
}
const cerneraccess: any = require('../../../pp_assets/card_images/cerneraccess.png');
const medicalstaffoffices: any = require('../../../pp_assets/card_images/medicalstaffoffices.png');
const clinicalresources: any = require('../../../pp_assets/card_images/clinicalresources.png');
const bestpractices: any = require('../../../pp_assets/card_images/bestpractices.png');
const caretransformation: any = require('../../../pp_assets/card_images/caretransformation.png');
const iseducation: any = require('../../../pp_assets/card_images/iseducation.png');
const support: any = require('../../../pp_assets/card_images/support.png');
const servicelines: any = require('../../../pp_assets/card_images/servicelines.png');
const latestnews: any = require('../../../pp_assets/card_images/latestnews.png');
export default class MainpageWebpart extends BaseClientSideWebPart<IMainpageWebpartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <div class="card_component card_container col-12 bg-light-cyan" style="background-color:transparent;">
	<div class="card_component-content">
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://workspace.baycare.org" target="_blank">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${cerneraccess}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://workspace.baycare.org" target="_blank"><div class="card-body-text">
						<h3 class="card-title field-title">BayCare Applications (VDI)</h3>
					</div>
					</a>
					<div class="card-body-text">
						<div class="card-content field-content">
						<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'><a href="https://vdi.baycare.org/" target="_blank" style="text-decoration:none; color: rgb(68,68,68)">To download the VDI (VMware Horizon Client) application needed to login, please click here</a><p/>
						<a href="https://workspace.baycare.org" target="_blank" style="text-decoration:none; color: rgb(68,68,68)">Click here to access all Cerner Applications via BayCare Virtual Desktop.</a></span>
						</div>
					</div>
					<div class="btn btn-primary field-link">
						<a href="https://workspace.baycare.org" target="_blank">BayCare Applications (VDI)</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Latest-News.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${latestnews}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Latest-News.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">COVID-19 and Latest News</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>Get the latest updates about novel coronavirus (COVID-19) and other news from BayCare.<!--Get the latest highlights and information from BayCare.--></span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Latest-News.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>		
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Medical-Staff-Offices.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${medicalstaffoffices}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Medical-Staff-Offices.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Medical Staff Offices</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>Get the latest MEC news and announcements, policies and procedures, and other resources.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Medical-Staff-Offices.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Care-Transformation.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${caretransformation}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Care-Transformation.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Care Transformation</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>Care Transformation is our patient-centered initiative that takes BayCare to the next level.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Care-Transformation.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Best-Practice-Medical-Guidelines.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${bestpractices}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Best-Practice-Medical-Guidelines.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Best Practice Medical Guidelines</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>View the evidence-based guidelines designed to supplement clinical expertise and provide standardized, patient-centered care.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Best-Practice-Medical-Guidelines.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Clinical-Resources.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${clinicalresources}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Clinical-Resources.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Clinical Resources</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>View this library of links to OpenAthens, non-Cerner clinical applications, BayCare reference guides and other handy websites.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Clinical-Resources.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>
		<div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Information-Services-Education.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${iseducation}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Information-Services-Education.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Information Services Education</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>Your resource for Job Aids, videos and IS updates and information.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Information-Services-Education.aspx">Learn More</a>
					</div>
				</div>        
			</div>
    </div>
    <div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://teams.microsoft.com/">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${servicelines}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://teams.microsoft.com/"><div class="card-body-text">
						<h3 class="card-title field-title">Service Lines & Collaboratives</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>Access to the Microsoft Team for your collaborative or service line.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://teams.microsoft.com/">Go To Teams</a>
					</div>
				</div>        
			</div>
    </div>
    <div class="card_component card col-12 col-sm-4">
			<div class="card_component-content">
				<div class="field-image">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Physician-Portal-Support.aspx">
						<img width="600" height="340" style="margin: 0px;" alt="" src="${support}">
					</a>
				</div>
				<div class="card-body">
					<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Physician-Portal-Support.aspx"><div class="card-body-text">
						<h3 class="card-title field-title">Support</h3>
						<div class="card-content field-content">
							<span style='color: rgb(68, 68, 68); font-family: Kievit, "Helvetica Neue", Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400;'>The Support page is where you can find informational assets published anywhere in the site.</span>
						</div>
					</div>
					</a>
					<div class="btn btn-primary field-link">
						<a href="https://baycare1.sharepoint.com/sites/PhysicianPortal/SitePages/Physician-Portal-Support.aspx">Learn More</a>
					</div>
				</div>        
			</div>
		</div>
	</div>
</div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
