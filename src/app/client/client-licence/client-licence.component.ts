import {Component, OnInit} from '@angular/core';
import {LicenseService} from "../../shared/services/license.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {License} from "../../shared/model/license";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {DateConverter} from "../../shared/util/date-converter";
import {Exam} from "../../shared/model/exam";
import {ExamService} from "../../shared/services/exam.service";

@Component({
  selector: 'app-client-licence',
  templateUrl: './client-licence.component.html',
  styleUrls: ['./client-licence.component.scss']
})
export class ClientLicenceComponent implements OnInit {

  form: FormGroup;
  licensesCategories: LicenseCategory[] = [];
  license: License;
  user: User;
  myProgressLicenses: License[] = [];
  myProgessCategories: LicenseCategory[] = [];
  exams: Exam[];

  constructor(private licenseService: LicenseService,
              private licenseCategoryService: LicenseCategoryService,
              private userService: UserService,
              private examService: ExamService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.licenseCategoryService.index().subscribe(res => this.licensesCategories = res);

    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => {
        this.user = res;
        this.licenseService.listByOneProperty("user.cpf", this.user.cpf).subscribe(res => {
          this.myProgressLicenses = [];
          for (let license of res)
            if (license.shelfLife == null && !license.status) {
              this.myProgressLicenses.push(license)
            }
        });
      });


    this.license = new License();

  }

  initLicense(licenseCategory: LicenseCategory) {
    this.license.category = licenseCategory;
    this.license.user = this.user;
    this.licenseService.save(this.license).subscribe(res => {
      window.location.reload();
    }, error2 => console.log(JSON.stringify(error2)))
  }

  licenseExpiration(expiration: Date) {
    return expiration != null ? DateConverter.convertDate(expiration) : "Licença Pendente";
  }

  licenseSituation(status: boolean) {
    return status ? "Deferida" : "Indeferida"
  }

  examResult() {
    this.user;
    this.license;
    this.exams;
  }
}
