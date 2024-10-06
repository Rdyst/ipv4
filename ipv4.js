class Ipv4 {
    constructor(address) {
        this.address = address;
        if (this.address[this.address.length - 1] === ".") {
            throw new Error("WRONG!");
        }
        this.array = this.address.split(".");
        this.splitAddress = this.array.map(x => parseInt(x));
    }
    // valiiiiiiiid
    isValid() {
        
        if (this.address.split(".").length !== 4 || this.splitAddress.length !== 4) {
            throw new Error("WRONG!");
        }
        for (let x of this.splitAddress) {
            if (x >= 0 && x <= 255) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    getAsString() {
        return this.address;
    }
            // binar
    getAsBinaryString() {

        return this.splitAddress.map(x => x.toString(2)).join(".");
    }
    // inter
    getAsInt() {
        
        return parseInt(this.splitAddress.map(x => x.toString(2).padStart(8, '0')).join(''), 2);
    }
    // klasas
    getClass() {
        
        const firstOctet = this.splitAddress[0];
        if (firstOctet >= 0 && firstOctet <= 127) return "A";
        if (firstOctet >= 128 && firstOctet <= 191) return "B";
        if (firstOctet >= 192 && firstOctet <= 223) return "C";
        if (firstOctet >= 224 && firstOctet <= 239) return "D";
        if (firstOctet >= 240 && firstOctet <= 255) return "E";
        throw new Error("WROOOOOOONG");
    }
    // oktety
    getOctet(index) {
        
        if (index < 0 || index > 3) {
            throw new Error("0 az 3 jenom");
        }
        return this.splitAddress[index];
    }
}


const address1 = new Ipv4("192.168.1.108");
console.log(address1.isValid());
console.log(address1.getAsString());
console.log(address1.getAsBinaryString());
console.log(address1.getOctet(1));
console.log(address1.getAsInt());
console.log(address1.getClass());

