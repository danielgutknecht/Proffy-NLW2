package backend.proffy.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Schedule {
    
    @Id
    private Long id;
    private int week_day;
    private int dayfrom;
    private int dayto;
    @ManyToOne(fetch = FetchType.LAZY)
    private Classes classes;
    
    public Schedule() {
	
    }

    public Schedule(Long id, int week_day, int dayfrom, int dayto, Classes classes) {
	super();
	this.id = id;
	this.week_day = week_day;
	this.dayfrom = dayfrom;
	this.dayto = dayto;
	this.classes = classes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getWeek_day() {
        return week_day;
    }

    public void setWeek_day(int week_day) {
        this.week_day = week_day;
    }

    public int getDayfrom() {
        return dayfrom;
    }

    public void setDayfrom(int dayfrom) {
        this.dayfrom = dayfrom;
    }

    public int getDayto() {
        return dayto;
    }

    public void setDayto(int dayto) {
        this.dayto = dayto;
    }

    public Classes getClasses() {
        return classes;
    }

    public void setClasses(Classes classes) {
        this.classes = classes;
    }
    
}
